function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.querySelector('#nested .target')
}

function increaseRankBy(n)
{
  const nodes = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < nodes.length; i++)
  {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML + n)
  }
}

function deepestChild()
{
  let current = document.querySelectorAll('div#grand-node')
  let next = [] 
  let target = null
  while (current)
  {
    for(let i = 0; i < current.length; i++)
    {
      
        next.push(current[i].children)
      
    }
    target = current
    current = next.shift()
  }
  return target
}