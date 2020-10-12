## 基本数据类型

Number: 可取二进制、八进制、十六进制、科学计数法(0b010111 0x 0o 123 0.123e9)
String: 支持Unicode转码
Bool: true false
Null: null
Undefined: undefined
Symbol
BigInt

包装/装箱

'123'.toString()  new String('123')
(1).toString()  new Number(1)