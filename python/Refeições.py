import streamlit as st 
import requests


st.set_page_config(layout="wide")

st.title("Refeições")

meals = requests.get("https://n8n.dizelequefez.com.br/webhook/refeicoes").json()

mealEdited = st.data_editor(
  meals,
  
  # use_container_width=True,
  # hide_index=True,
  # disabled=["id"],
)

st.write(mealEdited)

