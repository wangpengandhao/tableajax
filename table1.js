$(function(){
	let tbody=$('tbody');
	$.ajax({
		type:'get',
		url:'query.php',
		dataType:'json',
		success:function(data){
			// data.forEach(element=>{
			// 	createTr(element);
			// })
			$.each(data,function(index,value){
				createTr(index,value);
			})			
		}
	})
	function createTr(index,data){
		tbody[0].innerHTML+=`<tr id='${data.id}'>
		<td type="name">${data.name}</td>
		<td type="age">${data.age}</td>
		<td type="sex">${data.sex}</td>
		<td type="phone">${data.phone}</td>
		<td type="address">${data.address}</td>
		<td class="bt"><button>删除</button></td>`
	}
	tbody.on('dblclick','td[class!=bt]',function(e){
		let element=$(e.target);
		let oval=element.text();
		element.text('');
		$('<input>').appendTo(element).val(oval).blur(function(){
			let nval=$(this).val();
			$(this).remove();
			element.text(nval);
			let info=element.attr('type');
			let id=element.closest('tr').attr('id')
			$.ajax({
				url:'updata.php',
				data:{value:nval,info,id},
				success:function(data){
					if(data){
						alert('修改成功');
					}else{
						alert('修改失败');
					}
				}
			})
		});
	})
	tbody.on('dblclick','td[class=bt]',function(e){
		let element=$(e.target);
		let id=element.closest('tr').attr('id')
		element.closest('tr').remove();
		$.ajax({
			url:'delete.php',
			data:{id},
			success:function(data){
				if(data){
					alert('删除成功');
				}else{
					alert('删除失败');
				}
			}
		})
	})

})