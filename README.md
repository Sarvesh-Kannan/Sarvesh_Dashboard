# **Strategic HR Analytics Dashboard**

## **Overview**
The **Strategic HR Analytics Dashboard** is a comprehensive 3-page solution that helps organizations analyze, visualize, and optimize workforce data. Built using **Power BI**, **DAX**, and advanced data modeling techniques, this project provides actionable insights into key HR metrics such as attrition, performance, and retention. Additionally, the platform integrates an **AI-powered bot** to assist with real-time queries and enhance user experience.

---

## **Key Features**
1. **3-Page Interactive Dashboard**:
   - **Overview Page**: High-level insights into employee demographics and retention metrics.
   - **Detailed Insights Page**: Drill down into employee performance, satisfaction, and other key metrics.
   - **AI Bot Interaction Page**: Chat with an AI-powered assistant for real-time assistance and queries.

2. **Comprehensive Dataset**:
   - Contains 1470 records with 35 columns, focusing on employee demographics, job roles, performance, and attrition.

3. **Advanced Data Modeling**:
   - Designed using a star schema for optimal performance and scalability in Power BI.

4. **DAX-Driven Metrics**:
   - Custom measures such as **Attrition Rate**, **Average Tenure**, and **Retention Percentage** calculated using advanced DAX functions like `CALCULATE`, `SUMX`, and `RELATED`.

5. **AI Integration**:
   - An AI-powered chatbot integrated for real-time HR-related queries and user support.

---

## **Project Structure**
```
project/
│
├── templates/
│   ├── index.html       # Landing page
│   ├── dashboard.html   # Dashboard page
│
├── static/
│   ├── css/
│   │   └── style.css    # Centralized styling for all pages
│   ├── js/
│   │   └── script.js    # Optional JavaScript for theme toggle or animations
│   └── assets/
│       └── images/      # Placeholder for any images/icons
│
├── data/
│   └── HR-Employee-Attrition.csv  # Source dataset for the project
│
├── app.py               # Flask backend to serve the web app
└── README.md            # Project documentation
```

---

## **Installation**
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YourGitHubUsername/HR-Analytics-Dashboard.git
   cd HR-Analytics-Dashboard
   ```

2. **Install Dependencies**:
   Ensure you have Python installed. Use `pip` to install the required libraries:
   ```bash
   pip install flask pandas
   ```

3. **Run the Application**:
   Start the Flask server:
   ```bash
   python app.py
   ```
   Navigate to `http://127.0.0.1:5000` in your browser to access the dashboard.

---

## **Technical Details**
### **Tools & Technologies**:
- **Frontend**: HTML5, CSS3
- **Backend**: Flask (Python)
- **Data Visualization**: Power BI
- **Data Modeling**: Star Schema
- **AI Integration**: Chatbot for HR-related queries

### **DAX Functions Used**:
- **CALCULATE**: Modify filter context for dynamic metrics.
- **SUMX**: Perform row-by-row calculations across a table.
- **IF**: Implement conditional logic for custom measures.
- **RELATED**: Retrieve related table values for calculations.

### **Key Metrics**:
- **Attrition Rate**: Percentage of employees leaving the organization.
- **Retention Rate**: Percentage of employees retained.
- **Average Tenure**: Average duration employees stay in the organization.

---

## **Screenshots**
1. **Overview Page**: Provides high-level insights into workforce data.
2. **Detailed Insights Page**: Drill down into performance and satisfaction metrics.
3. **AI Interaction Page**: Chat with the AI bot for real-time HR assistance.

*Screenshots of the dashboard can be added here.*

---

## **Future Enhancements**
1. Integrate **predictive models** to forecast employee attrition trends.
2. Add **real-time data synchronization** with HR systems.
3. Enhance the AI bot with **natural language processing (NLP)** for better user interaction.

---

## **Contributing**
Contributions are welcome! Please fork this repository and create a pull request with your changes. Ensure your code adheres to the project style and conventions.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For questions or feedback, feel free to connect:
- **LinkedIn**: [Sarvesh Kannan](https://www.linkedin.com/in/sarvesh-kannan/)
- **GitHub**: [Sarvesh-Kannan](https://github.com/Sarvesh-Kannan)
- **Medium**: [Sarvesh Kannan](https://sarveshkannan.medium.com)

--- 

This README ensures your project appears professional and provides clarity to viewers. Let me know if you'd like further customization!
