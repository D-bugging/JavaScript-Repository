// node process.js -a

const flag = process.argv.indexOf('-a') !== 1
console.log(flag)

if (flag)
{
  process.stdout.write('True!\n')
  process.exit()
}
else
{
  process.stdout.write('Write ur name here: ')
  process.stdin.on('data', data => {
    const name = data.toString().replace('\n', '')
    process.stdout.write(`Ur name ${name}\n`)
    process.exit()
  })
}