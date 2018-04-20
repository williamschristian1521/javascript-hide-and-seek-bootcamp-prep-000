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

let current = document.querySelectorAll('#grand-node')
return current[current.length - 1]
}