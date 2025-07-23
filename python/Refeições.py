import streamlit as st 
import requests
from collections import defaultdict


class Refeicao:
  def __init__(self):
      st.set_page_config(layout="wide")
      st.title("Refeições")

      self.meals = self.load_meals()
      self.meals_dict = self.organizar_meals(self.meals)
      self.foods = self.load_foods()

      self.list_meals()

  def load_meals(self):
      try:
          response = requests.get("https://n8n.dizelequefez.com.br/webhook/refeicoes")
          response.raise_for_status()
          return response.json()
      except Exception as e:
          st.error(f"Erro ao carregar refeições: {e}")
          return []

  def load_foods(self):
    try:
        response = requests.get("https://n8n.dizelequefez.com.br/webhook/alimentos")
        response.raise_for_status()
        return response.json()
    except Exception as e:
        st.error(f"Erro ao carregar alimentos: {e}")
        return []

  def create_meal(self):
    try:
      response = requests.post("https://n8n.dizelequefez.com.br/webhook/refeicoes")
      response.raise_for_status()
      return response.json()
    except Exception as e:
      st.error(f"Erro ao carregar alimentos: {e}")
      return []
  

  def organizar_meals(self, meals):
    meals_dict = defaultdict(list)
    for meal in meals:
      chave = meal['Refeição'].lower()
      meals_dict[chave].append({
        'Alimento': meal['Alimento'],
        'Quantidade': meal['Quantidade'],
        'Proteínas': meal['Proteínas'],
        'Gorduras': meal['Gorduras'],
        'Carboidratos': meal['Carboidratos'],
        'Calorias': meal['Calorias']
      })
    return meals_dict

  def list_meals(self):
    meals_list = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar']
    for meal in meals_list:
      meal_lower = meal.lower()
      if meal_lower in self.meals_dict:
        st.subheader(meal)
        st.data_editor(self.meals_dict[meal_lower])

    self.create()
    # if st.button("Adicionar"):

  # @st.dialog("Criar Refeição")
  def create(self):
    with st.form("Criar Refeição"):

      st.subheader("Criar Refeição")
      Refeição = st.selectbox("Refeição", ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar'])
      
      Alimento =  st.selectbox("Alimento", options=self.foods, format_func=lambda x: x['Nome'])
      
      # st.write(food)
      
      count = st.number_input("Quantidade",format="%d", min_value=0, max_value=100)
      
      st.divider()
      st.subheader("Nutrientes")
     
      Proteínas = st.number_input("Proteínas", value=(Alimento['Proteínas'] * count), disabled=True)
      Gorduras = st.number_input("Gorduras",value=(Alimento['Gorduras'] * count), disabled=True)
      Carboidratos = st.number_input("Carboidratos", value=(Alimento['Carboidratos'] * count), disabled=True)
      
      Calorias = st.number_input("Calorias",format="%d", value=(Alimento['Calorias'] * count), disabled=True)
      
      if st.form_submit_button("Adicionar"):
        self.create_meal()
    # st.write("test")
    


# Executa a aplicação
Refeicao()
