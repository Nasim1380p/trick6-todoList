let flag=0
        const btn=document.querySelector('button')
        const inp=document.getElementById('text')
        const list=document.getElementById('list')
        const _search=document.getElementById('search')
        let data=[]

          if(localStorage.getItem('localstorage')!=null){
            data= JSON.parse(localStorage.getItem('localstorage'))
          }
          data.map((x,i)=>{
            let li =document.createElement('li')
            li.classList.add('row')
        li.innerHTML=`
                <input id='para${x.flag}' onclick='_select(this)' type="checkbox" class="mx-4 ">
                <label for='para${x.flag}' class="px-2">${x.val}</label>
                <div class="flex xl:w-[60%] justify-end ">
                    <div class="text-lg text-[#ffffcb]">${new Date().toLocaleDateString()}</div>
                    <span onclick="edit(this)" class="text-[#3fc9fb] text-2xl px-2"><i class=" icon-edit "></i></span>
                    <span onclick="del(this)" class="text-[#fc5d5d] text-2xl px-1"><i class="icon-trash"></i></span>
                  </div>
                   `
               list.appendChild(li)
               flag=data.length
          })
            
         
        btn.addEventListener('click',()=>{
        if(inp.value!=''){
            let li =document.createElement('li')
            li.classList.add('row')
        li.innerHTML=`
                <input id='para${flag}' onclick='_select(this)' type="checkbox" class="mx-4 ">
                <label for='para${flag}' class="px-2">${inp.value}</label>
                <div class="flex xl:w-[60%] justify-end ">
                    <div class="text-lg text-[#ffffcb]">${new Date().toLocaleDateString()}</div>
                    <span onclick="edit(this)" class="text-[#3fc9fb] text-2xl px-2"><i class=" icon-edit "></i></span>
                    <span onclick="del(this)" class="text-[#fc5d5d] text-2xl px-1"><i class="icon-trash"></i></span>
                  </div>
                   `
        list.appendChild(li)
        
         inp.focus()
         flag++

        const temp={
            falg: flag,
            val: inp.value
        }
        data.push(temp)
        localStorage.setItem('localstorage',JSON.stringify(data))
        inp.value=null
        } else{
            alert('please type somthings!')
        }
        })

        const del=(s)=>{
            s.parentElement.parentElement.remove()
        }

        const edit=(s)=>{
               let p= prompt('Write new name...')
            s.parentElement.previousElementSibling.innerHTML=p
       
        }
        const _select=(s)=>{
          s.checked ? s.parentElement.style.background='#317cf436' : s.parentElement.style.background='none'
        }

        _search.addEventListener('input',(e)=>{
            const _label = document.querySelectorAll('#list label')
            let searchValue = e.target.value


            _label.forEach((item)=>{
                if(
                    item.innerText.indexOf(searchValue) == -1
                ){
                    item.parentElement.style.display='none'
                }else{
                    item.parentElement.style.display='flex'

                }
            })
        })