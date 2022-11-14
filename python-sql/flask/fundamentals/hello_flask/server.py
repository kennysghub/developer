from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
# a route is just a "string" attached to an HTTP vern
@app.route('/')
def rootroute():
    return ("Hai  World")

@app.route('/kenny')
def rootroute():
    return("Kenny's World")



@app.route('/', defaults = {'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'Invalid URL.'

if __name__ == "__main__":
    app.run(debug=True) 
    