from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """
    Route for the home page.
    Displays dataset description, HR analytics highlights, and the importance of preprocessing and EDA.
    """
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    """
    Route for the dashboard page.
    Embeds a Power BI report for HR analytics.
    """
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
