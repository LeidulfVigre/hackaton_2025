from fastapi import FastAPI
from pydantic import BaseModel
import plotly.graph_objects as go
import random

app =FastAPI()

def random_between(minVal, maxVal):
    return random.uniform(minVal, maxVal)

class receivedData(BaseModel):
    vannkraft: str
    solcelle: str
    vind: str
    atom: str
    kull: str
    temperatur: str
    skydekke: str
    vindstyrke: str
    variasjon: str

# x - aksen timer
# y - aksen kWh

# global data

@app.post('/send_data')
def make_plot(data: receivedData):

    # The axises are reset every time this endpoint is reached. Not good but it will work for now..
    x_axis = []
    y_axis = []

    vannkraft_effekt = 1000000
    vindkraft_effect = 5000
    solcelle_effect = 2.5
    kull_effect = 800000
    atom_effect = 1000000
    
    # Turns all the data to ints. THIS IS DUMB ASS CODE BUT IT WORKS. Too tired to figure something out..
    vannkraft_int = int(data.vannkraft)
    solcelle_int = int(data.solcelle)
    vind_int = int(data.vind)
    atom_int = int(data.atom)
    kull_int = int(data.kull)
    temperatur_int = int(data.temperatur)
    skydekke_int = int(data.skydekke)
    vindstyrke_int = int(data.vindstyrke)
    variasjon_int = int(data.variasjon)

    # random verdier som vil 
    minRandVal_variasjon = 1-variasjon_int
    maxRandVal_variasjon = 1+variasjon_int


    # Looper gjennom alle timene og finner total mengde strøm produsert
    for i in range(24):
        x_axis[i] = i+1

        if temperatur_int < 0:
            vannkraft_data = 0 
        else:
            vannkraft_data = vannkraft_int * vannkraft_effekt

        if (i >= 1 and i <= 6) or (i >= 18 and i <= 24):
            solcelle_data = 0
        else:
            solcelle_data = solcelle_int * solcelle_effect * (skydekke_int* random_between(minRandVal_variasjon, maxRandVal_variasjon))
        
        vind_data = vind_int * vindkraft_effect * (vindstyrke_int * random_between(minRandVal_variasjon, maxRandVal_variasjon))
        atom_data = atom_int * atom_effect
        kull_data = kull_int * kull_effect

        sumEffekt = vannkraft_data + solcelle_data + vind_data + atom_data + kull_data

        y_axis[i] = sumEffekt

    # Lager figuren og legger til dataene
    fig = go.Figure()

    fig.add_trace(go.Scatter(x=x_axis, y=y_axis, mode='lines+markers', name='Samlet Energi effekt i kWh'))

    plot_html = fig.to_html(full_html = False)
    return {"plot_html": plot_html}