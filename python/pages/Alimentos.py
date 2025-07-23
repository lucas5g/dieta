import streamlit as st 
import requests 
st.set_page_config(layout="wide")

st.title("Alimentos")

foods = requests.get("https://n8n.dizelequefez.com.br/webhook/alimentos").json()


foodEdited = st.data_editor(
  foods['café da manhã'],
  column_config={
    # "row_number": st.column_config.NumberColumn(
    #   'Nº',
    #   lambda row: row - 1,      
    # )
    
  }
)

