
```python
import pandas as pd

# import the Decision tree algorithm 
from sklearn.tree import DecisionTreeClassifier as DTC

# Train and Split The Data 
from sklearn.model_selection import train_test_split as TTS

# Check the Accuracy Score 
from sklearn.metrics import accuracy_score as Scores

# Read the csv
music_data = pd.read_csv("music.csv")

# Set the Inputs by dropping the column name genre 
X = music_data.drop(columns=["genre"])

# Set the Output by selecting only the genre 
Y = music_data["genre"]

# Split the dataset into test and train, 20% of the dataset will be used for training 
X_Train, X_Test, Y_Train, Y_Test = TTS(X, Y, test_size=0.2)

# Initialise the Function 
model = DTC()

# Train the model 
model.fit(X_Train, Y_Train)

# Grab the predicted Values, It will try to predict the Y_Test values 
predictions = model.predict(X_Test)

# Check the accuracy of the scores 
TheScore = Scores(Y_Test, predictions)
TheScore
```



# Model Persistence
Train the Model and Save the Trained Model to a File 

``` python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier as DTC
import joblib  # Import joblib directly

# Read the CSV file
music_data = pd.read_csv("music.csv")

# Set the Inputs by dropping the column name 'genre'
X = music_data.drop(columns=["genre"])

# Set the Output by selecting only the 'genre'
Y = music_data["genre"]

# Initialize the Decision Tree Classifier
model = DTC()

# Train the model
model.fit(X, Y)

# Save the trained model to a file
joblib.dump(model, "music_recommender.pkl")  # Save as a .pkl file for best practice

# Optional: Predict a new value (uncomment to use)
# predictions = model.predict([[21, 1]])
```


# Load the Data for predictions 

``` python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier as DTC
import joblib  # Import joblib directly

model = joblib.load("music_recommender.pkl")  # Save as a .pkl file for best practice
predictions = model.predict([[21, 1]])
predictions
```


# Visualizing Data

```python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier as DTC
import joblib  # Import joblib directly
from sklearn import tree as T


# Read the CSV file
music_data = pd.read_csv("music.csv")

# Set the Inputs by dropping the column name 'genre'
X = music_data.drop(columns=["genre"])

# Set the Output by selecting only the 'genre'
Y = music_data["genre"]

# Initialize the Decision Tree Classifier
model = DTC()

# Train the model
model.fit(X, Y)


# Export To A Graph 
T.export_graphviz(
                  model, 
                  out_file="music_recommender.dot",
                  feature_names = ['age', 'gender'],
                  class_names = sorted( Y.unique() ),
                  label = 'all',
                  rounded = True,
                  filled=True
    
    
                 )






```
































