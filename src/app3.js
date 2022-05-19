import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', ()=>{
    $square.toggleClass('active') //如果存在（不存在）就删除（添加）一个类
})




















