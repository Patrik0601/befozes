import fs from 'fs'
import path, { format } from 'path'
import { fileURLToPath } from 'url'
import input from '../input.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'uvegek.txt')

let content 
try{
    content = fs.readFileSync(filePath, 'utf-8')
}catch(error){
    console.log(error)
}

let arr = content.split('\n')[0].split(', ').map(Number)

let sum = 0
for(let i = 0; i<arr.length; i++){
    sum += arr[i]
}

let lekvar = await input ("Kérem adjon egy számot")

console.log(sum > lekvar ? `Elegendö üveg volt.` : `Maradt lekvár.` )