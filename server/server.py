from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

def get_data():
    df = pd.read_csv("./static/data/Building_Permits.csv", low_memory=False)
    return df

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api")

def api():
    print(request.args)


def hello():
    df = get_data()
    return df.head().to_json()

if __name__ == "__main__":
    app.run()
