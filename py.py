import numpy as np


ps = [1, 30, 1]
kqs = []
alfa = [0.8, 1.95, 1.1]


xs = []
fxs = []


def f(x):
    if x < 0:
        raise ValueError(
            "x must be in the range [0, 1] to avoid imaginary results.")

    numerator = 1.99 - x * (1 - x) * (2.15 - 3.93 * x + 2.7 * x**2)
    denominator = (1 + 2 * x) * (1 - x)**1.5

    return 6 * np.sqrt(x) * (numerator / denominator)


for i in range(3):
    x = alfa[i] / 13.4
    fx = f(x)
    kq = ps[i] / (0.0044 * np.sqrt(0.0134)) * fx
    kqs.append((kq))
    xs.append((x))
    fxs.append((fx))

print("xs:", xs)
print("fxs:", fxs)
print("kqs:", kqs)
