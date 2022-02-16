import flask
import numpy as np
import lttb
import json
app = flask.Flask(__name__)
app.config["DEBUG"] = True
from datetime import datetime
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
@app.route('/', methods=['GET'])
def home():

# Reading JSON file 
    f = open('10L.json', 'r')
    data = json.loads(f.read())
  

    featureOne = []
    featureTwo = []
    print('json loaded')
 # Iterating through the json for timestamp creating and list creation of two values that is like this (timestamp, value)

    for index, item in enumerate(data, start=0):   # Python indexes start at zero
    #     print(index, item)
    # for i in data:
        dt = datetime.strptime(item['x'], "%Y-%m-%dT%H:%M:%S.%fZ").timestamp()
        featureOne.append((dt, item['column1']))
        featureTwo.append((dt, item['column2']))
    
    print('Dict created')
    f.close()

# Shaping list
    featureOne = np.array(featureOne)
    featureTwo = np.array(featureTwo)
    print('Array shaped')

# Applying LTTB on feature one data array  featureOne = [(timestamp, column1), (timestamp, column1), (timestamp, column1)] i.e [(1233333333, 1), (1223122222, -1), (232112111, 0)]
    featureOne = lttb.downsample(featureOne, n_out=200)
    print('LTTB algo executed ')

# Applying LTTB on feature one data array  featureTwo = [(timestamp, column2), (timestamp, column2), (timestamp, column2)] i.e [(1233333333, 1), (1223122222, -1), (232112111, 0)]
    featureTwo = lttb.downsample(featureTwo, n_out=200)
    
    context = { 'featureOne' : json.dumps(featureOne.tolist()) ,'featureTwo' : json.dumps(featureTwo.tolist())}
    return  context

app.run()