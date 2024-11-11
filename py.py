import numpy as np

ps = [5.3426, 1.7, 2.297]
kqs = []

def f(x):
    numerator = (1.99 - x * (1 - x) * (2.15 - 3.93 * x + 2.7 * x**2))
    denominator = ((1 + 2 * x) * (1 - x)**1.5)
    return 6 * np.sqrt(x) * (numerator / denominator)

for i in range(3):

    fx = f(x)
    kq = ps[i]/(0.0044*np.sqrt(0.0134)) * fx
    kqs.append()
print(kqs)