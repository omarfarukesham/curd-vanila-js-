let count = 0
document.getElementById('submit').addEventListener('click',function(){
    const nameField = document.getElementById('name-field').value
    const emailField = document.getElementById('email-field').value
    const phoneField = document.getElementById('phone-field').value 
       if(nameField == '' && emailField == '' && phoneField == ''){
        alert('Please make sure value')
    }else{
        count++
        const tableData = document.getElementById('table-data')
        const tableContainer = document.createElement('tr')

        tableContainer.innerHTML =
         `<td scope="row">${count}</td>
        <td>${nameField}</td>
        <td>${emailField}</td>
        <td>${phoneField}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button> <button class="done-btn btn btn-success">Done</button></td>`

     
        tableData.appendChild(tableContainer)
        document.getElementById('email-field').value =''
        document.getElementById('name-field').value =''
        document.getElementById('phone-field').value =''

        const getActionDeleteBtn = document.getElementsByClassName('delete-btn')
        const getActionDoneBtn = document.getElementsByClassName('done-btn')
        
        for(const dlt of getActionDeleteBtn){
            dlt.addEventListener('click', function(e){
                const getParentTag = e.target.parentNode.parentNode
                getParentTag.style.display = 'none'
            })
        }

        for(const done of getActionDoneBtn){
            done.addEventListener('click', function(e){
                console.log(e.target.parentNode)
             e.target.parentNode.parentNode.style.textDecoration = 'line-through'
                   
            })
        }

    

    }
   
})