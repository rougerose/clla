$((function(){$(".formulaire_filtrer_projets").on("click","input[type='checkbox']",(function(){let t=$(this).parents("form").find("input[type='checkbox']"),a=e(t),r={mots:[]};$(this).parent().toggleClass("is-checked"),a.forEach((function(e){r.mots.push(e)})),ajaxReload("projets_body",{history:!0,args:r}),ajaxReload("projets_breadcrumb",{args:r}),ajaxReload("projets_header",{args:r})})),$(".filters_reset").on("click","button",(function(){event.preventDefault();let e=$(this).attr("data-self");ajaxReload("projets_body",{history:!0,href:e}),ajaxReload("projets_breadcrumb",{href:e}),ajaxReload("projets_header",{href:e})}));const e=e=>{let t=[];return e.length>0&&e.each((function(){$(this).is(":checked")&&t.push($(this).val())})),t}}));
