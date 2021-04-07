// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(Ralph) {drivers.push (Ralph)}

function destructivelyPrependDriver(Bob) {drivers.unshift (Bob)}

function destructivelyRemoveLastDriver(Garfield) {drivers.pop (Garfield)}

function destructivelyRemoveFirstDriver(Milo) {drivers.shift (Milo)}

function appendDriver(Broom) {
    return [...drivers, Broom] }

function prependDriver(Arnold) {
    return [Arnold, ...drivers]}

function removeFirstDriver() {
    return drivers.slice (1)}

function removeLastDriver() {
    return drivers.slice (0, drivers.length - 1)}