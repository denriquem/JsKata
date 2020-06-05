A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

---

User stories:

As a user so,
so that I can know if a number is narcassistic,
I would like to see true if my number is narcassistic,

As a user,
So i can know that my nubmer doesn't destructively love itslef,
I would like to see false if my number isn't narcassistic.

---

input: -> output

1 -> true

10 -> false

154 -> true

155 -> false

1634 -> true

1722 -> false
