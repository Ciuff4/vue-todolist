const app= new Vue({
    el:'#app',
    
    data:{
        todos:[
            {
                text:'ciao',
                done:'false',
            },
            {
                text:'ciao2',
                done:'false',
            },
            {
                text:'ciao3',
                done:'false',
            }
        ],
        isDone:true,
        newTodo:{
            text: "",
            done:false,
        },
    },

    methods:{
        removeToDo(index){
            this.todos.splice(index, 1);
        },
        addNewTodo(){
            const newTodo={
                text: this.newTodo.text,
                done:false,
            };
            this.todos.push(newTodo);
        }
    }
})