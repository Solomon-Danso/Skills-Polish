# Data Types
To analyze data, it is important to know what type of data we are dealing with.
We can split the data types into three main categories:
<br/> [-] Numerical <br/>
[-] Categorical <br/>
[-] Ordinal <br/>



**`Numerical`**:
```typescript
Numbers
Discrete Data => Fixed Numbers [Integers]
Continuous Data => Any Number [Decimal]
```

**`Categorical`**:
```typescript
a color value,
or any yes/no values
```

**`Ordinal`**:
```typescript
school grades where A is better than B and so on.
```

---


# Mean Median Mode 
In Machine Learning (and in mathematics) there are often three values that interests us:

1. Mean - The average value
2. Median - The mid point value
3. Mode - The most common value


**`Code`**:
```python
import numpy as np
from scipy import stats;

speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]
mean = np.mean(speed)
median = np.median(speed)
mode = stats.mode(speed)

print("Mean: ",mean)
print("Median: ",median)
print("Mode: ",mode)


```

---

# Standard Deviation 
Standard deviation is a number that describes how spread out the values are.

A low standard deviation means that most of the numbers are close to the mean (average) value.

A high standard deviation means that the values are spread out over a wider range.


**`Code`**:
```python
std = np.std(speed)
print("Std: ",std)


```

---

# Variance
Variance is another number that indicates how spread out the values are.

In fact, if you take the square root of the variance, you get the standard deviation!

Or the other way around, if you multiply the standard deviation by itself, you get the variance!

To calculate the variance you have to do as follows:

1. Find the mean:

(32+111+138+28+59+77+97) / 7 = 77.4

2. For each value: find the difference from the mean:

 32 - 77.4 = -45.4
111 - 77.4 =  33.6
138 - 77.4 =  60.6
 28 - 77.4 = -49.4
 59 - 77.4 = -18.4
 77 - 77.4 = - 0.4
 97 - 77.4 =  19.6

3. For each difference: find the square value:

(-45.4)2 = 2061.16
 (33.6)2 = 1128.96
 (60.6)2 = 3672.36
(-49.4)2 = 2440.36
(-18.4)2 =  338.56
(- 0.4)2 =    0.16
 (19.6)2 =  384.16

4. The variance is the average number of these squared differences:

(2061.16+1128.96+3672.36+2440.36+338.56+0.16+384.16) / 7 = 1432.2

Symbols
Standard Deviation is often represented by the symbol Sigma: σ

Variance is often represented by the symbol Sigma Squared: σ2



**`Code`**:
```python
std = np.std(speed)
print("Std: ",std)


```

---

# Percentile
Percentiles are used in statistics to give you a number that describes the value that a given percent of the values are lower than.

Example: Let's say we have an array that contains the ages of every person living on a street.

ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]

What is the 75. percentile? The answer is 43, meaning that 75% of the people are 43 or younger.

**`Code`**:
```python
import numpy

ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]

x = numpy.percentile(ages, 75)

print(x)

What is the age that 90% of the people are younger than?

import numpy

ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]

x = numpy.percentile(ages, 90)

print(x)



```

---

# Data Distribution

To create big data sets for testing, we use the Python module NumPy, which comes with a number of methods to create random data sets, of any size.

Create an array containing 250 random floats between 0 and 5:



**`Code`**:
```python
import numpy

x = numpy.random.uniform(0.0, 5.0, 250)

print(x)

```

Histogram distribution
**`Code`**:
```python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.uniform(0.0, 5.0, 250)

plt.hist(x, 5)
plt.show()

```


Normal distribution
**`Code`**:
```python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.normal(5.0, 1.0, 100000)

plt.hist(x, 100)
plt.show()

Mean Value => 5.0 
Standard Deviation => 1.0 
Bars = 100
values = 100000

Meaning that the values should be concentrated around 5.0, and rarely further away than 1.0 from the mean.

And as you can see from the histogram, most values are between 4.0 and 6.0, with a top at approximately 5.0.

```


Scatter Plot
**`Code`**:
```python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.normal(5.0, 1.0, 1000)
y = numpy.random.normal(10.0, 2.0, 1000)

plt.scatter(x, y)
plt.show()

```


---


# Regression 
The term regression is used when you try to find the relationship between variables.

In Machine Learning, and in statistical modeling, that relationship is used to predict the outcome of future events.


## Linear Regression
Linear regression uses the relationship between the data-points to draw a straight line through all them.

This line can be used to predict future values.


**`Code`**:
```python
import matplotlib.pyplot as plt
from scipy import stats

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

slope, intercept, r, p, std_err = stats.linregress(x, y)

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, mymodel)
plt.show()


Explanation
Import the modules you need.


import matplotlib.pyplot as plt
from scipy import stats

Create the arrays that represent the values of the x and y axis:

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

Execute a method that returns some important key values of Linear Regression:

slope, intercept, r, p, std_err = stats.linregress(x, y)

Create a function that uses the slope and intercept values to return a new value. This new value represents where on the y-axis the corresponding x value will be placed:

def myfunc(x):
  return slope * x + intercept

Run each value of the x array through the function. This will result in a new array with new values for the y-axis:

mymodel = list(map(myfunc, x))

Draw the original scatter plot:

plt.scatter(x, y)

Draw the line of linear regression:

plt.plot(x, mymodel)

Display the diagram:

plt.show()


```

It is important to know how the relationship between the values of the x-axis and the values of the y-axis is, if there are no relationship the linear regression can not be used to predict anything.

This relationship - the coefficient of correlation - is called r.

The r value ranges from -1 to 1, where 0 means no relationship, and 1 (and -1) means 100% related.

Python and the Scipy module will compute this value for you, all you have to do is feed it with the x and y values.

**`Code`**
```python
from scipy import stats

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

slope, intercept, r, p, std_err = stats.linregress(x, y)

print(r)
```
The result -0.76 shows that there is a relationship, not perfect, but it indicates that we could use linear regression in future predictions.


---

