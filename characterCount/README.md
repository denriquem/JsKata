The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

---

input output table

'a' => { a: 1}
'b' => { b: 1}
'ab' => { a: 1, b: 1}
'aba' => { a: 2, b: 1}
'abac' => { a: 2, b: 1, c: 1}
'' = > { }
'abacd' => { a: 2, b: 1, c: 1, d: 1}
