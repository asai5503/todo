// ヘッダの曜日
const dObj = new Date
const youbi = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
const you = dObj.getDay();
document.getElementById('week').textContent = youbi[you];

const taskValue = document.getElementById('newTask');
const addBtn = document.getElementById('addBtn');

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
addBtn.addEventListener('click', evt => {
    const task = taskValue.value; 
    console.log(task);
    if(task){
        addTask(task);
        taskValue.value = '';
    }
});

//タスクの追加
const addTask = (task) =>{
    //チェックボックス
    const check = document.createElement('input'); // input要素作成
    check.setAttribute('type','checkbox');
    check.setAttribute('class','chkBtn');
    check.setAttribute('name','chk');

    //タスク
    const taskElement = document.createElement('p'); // p要素作成
    const taskname = document.createTextNode(task);
    taskElement.appendChild(taskname);

    //削除ボタン
    const del = document.createElement('input'); // input要素作成
    del.setAttribute('type','button');
    del.setAttribute('class','delBtn');
    del.setAttribute('name','del');
    del.setAttribute('value','－');

    //li要素
    const li = document.createElement('li');
    li.setAttribute('class','tsk');

    //要素生成
    const add = document.getElementById('lists');
    add.appendChild(li);
    li.appendChild(check);
    li.appendChild(taskElement);
    li.appendChild(del);

    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    del.addEventListener('click', evt => {
        del.parentNode.remove();
    });

    // チェックボックスをクリックし、イベントを発動（タスクが完了）
    check.addEventListener('change', evt => {
        if (check.checked) {
            check.nextElementSibling.classList.add('complete')
        }else{
            check.nextElementSibling.classList.remove('complete')
        }
    });
};


