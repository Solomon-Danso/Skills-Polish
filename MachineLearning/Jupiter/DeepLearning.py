import os 
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf

# Initialization 
x = tf.constant(4, shape=(1,1), dtype=tf.float32 )
w = tf.constant([[1,2,3],[4,5,6]]) #2 by 3 matrix
g = tf.ones((3,3)) #3 by 3 matrix for number ones 1
q = tf.zeros((3,3)) #3 by 3 matrix for number
r = tf.random.normal((3,3), mean=0, stddev=1) #3 by 3 matrix for number
u = tf.random.uniform((3,3), minval=0, maxval=1) #3 by 3 matrix for number

print(u)


# Mathematical 


# Indexing 

#Reshaping



