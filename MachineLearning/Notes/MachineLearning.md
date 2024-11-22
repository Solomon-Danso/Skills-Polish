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



```

---



