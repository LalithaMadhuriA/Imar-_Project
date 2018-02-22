var app=angular.module("myapp",[]);
       app.service("send_group_details",function($http){
            this.send_details=function(v){
               
              //alert(gid);
                var request = $http({ 
                     method: "post", 
                     url: "group_create.php", 
                     headers:{'content-type':'application/x-www-form-urlencoded'}, 
                     transformRequest: function(obj) {
                                   var str = [];
                                      for(var p in obj)
                                        {
                                               //console.log(p);
                                               str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                        }                                                      
                                        //alert(str.join("&"));
                                          return str.join("&");
                                  },
                     data: { 
                         
                         gid: v.g_id,
                         gname:v.g_name,
                         owner_email:'ram@inmar.com'
                     } 
                 }); 
  
                 // Store the data-dump of the FORM scope. 
                 request.success( 
                     function( data ) { 
  
                         alert(data);
                         v.onpageload();
                     } 
                 ); 


            }
       });
       app.service("collect_group_info",function($http){
             this.get_group_info=function(v){
                  v.hideTable=true;
                  v.hideme=false;
                  $http.get("send_group_info.php")
                    .then(function(response) {
                        v.collect = response.data;
                       //alert(JSON.stringify(v.collect));
                    });
             }
       });
       app.service("group_contacts_info",function($http){
        this.get_members_info=function(v,gid){
                  
        var request = $http({ 
                     method: "post", 
                     url: "collect_grpmembers_info.php", 
                     headers:{'content-type':'application/x-www-form-urlencoded'}, 
                     transformRequest: function(obj) {
                                   var str = [];
                                      for(var p in obj)
                                        {
                                               //console.log(p);
                                               str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                        }                                                      
                                        //alert(str.join("&"));
                                          return str.join("&");
                                  },
                     data: { 
                         
                         cgid: gid
                        
                     } 
                 }); 
  
                 // Store the data-dump of the FORM scope. 
                 request.success( 
                     function( data ) { 
  
                         alert(data);
                         v.group_members = data;
                     } 
                 ); 

            }
       });
       app.service("allContacts_info",function($http){
           this.getContacts_info=function(v){
            v.hideme=true;
            $http.get("all_contacts.php")
                    .then(function(response) {
                        v.collect_members = response.data;
                        for(i=0;i<v.collect_members.length;i++){
                          v.books.push({email:''});
                        }
                        //alert(JSON.stringify(v.books));
                    });                                            
           }
       });

       app.service("addGroupContact",function($http){
        this.send_contacts=function(v){
                          
                $http.post('add_contacts.php',{us:v.books}).success(
              function(data){
                   //alert("Contact added");
            });
                v.onpageload();
            }
       });
       app.service("update_grpcontact",function($http)
        {
          this.update=function(v,c_name,c_email,c_phno){
                        alert(c_phno);  
                             var request = $http({ 
                     method: "post", 
                     url: "update_contacts.php", 
                     headers:{'content-type':'application/x-www-form-urlencoded'}, 
                     transformRequest: function(obj) {
                                                  var str = [];
                                                  for(var p in obj)
                                                  {
                                                        //console.log(p);
                                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                                  }                                                 //alert(str.join("&"));
                                                    return str.join("&");
                                            },
                     data: { 
                         cname: c_name,
                         cemail:c_email,
                         cphno: c_phno
                     } 
                 }); 
  
                 // Store the data-dump of the FORM scope. 
                 request.success( 
                     function( data ) { 
                        alert(data);
                        $("#EditUserContacts").modal('hide');
                        v.edit_contact(gid);
                        $("#econtact").modal('show');
                    
                          
                         } 
                 ); 
            }
       });

       app.service("del_contact",function($http){
        this.deletes=function(v,email){
                       var request = $http({ 
                     method: "post", 
                     url: "delete_con.php", 
                     headers:{'content-type':'application/x-www-form-urlencoded'}, 
                     transformRequest: function(obj) {
                                                  var str = [];
                                                  for(var p in obj)
                                                  {
                                                        //console.log(p);
                                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                                  }                                                 //alert(str.join("&"));
                                                    return str.join("&");
                                            },
                     data: { 
                         
                         con_email:email
                     } 
                 }); 
  
                 // Store the data-dump of the FORM scope. 
                 request.success( 
                     function( data ) { 
                        //alert(data);
                         v.edit_contact(v.grp_id);
                         } 
                 ); 
            }
      });
  
       app.service("addNewGroupContact",function($http)
        {
          this.send_con=function(v,name,email,phno){
            console.log(name);
            var request = $http({ 
                     method: "post", 
                     url: "add_con.php", 
                     headers:{'content-type':'application/x-www-form-urlencoded'}, 
                     transformRequest: function(obj) {
                                                  var str = [];
                                                  for(var p in obj)
                                                  {
                                                        //console.log(p);
                                                        //console.log(v.nuname);
                                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                                  }                                                 //alert(str.join("&"));
                                                    return str.join("&");
                                            },
                     data: { 
                         cname:v.nuname,
                         cmail:v.nuemail,
                         cphno:v.nuphno
                     } 

                 }); 
                  //console.log(name);
                 // Store the data-dump of the FORM scope. 
                 request.success( 
                     function( data ) { 
                        alert(data);
                          //v.getcontact(gid);
                         } 
                 ); 
          }
        });

       app.controller("app_con",function($scope,send_group_details,addNewGroupContact,del_contact,collect_group_info,group_contacts_info,update_grpcontact,allContacts_info,addGroupContact){
            $scope.g_name="";
            $scope.g_id="";
            $scope.collect=""; 
            $scope.hideme=false;
            $scope.hideTable=true;
            $scope.collect_members="";
            $scope.group_members="";
            $scope.books=[];
            $scope.uname="";
            $scope.uemail="";
            $scope.uphno="";
            $scope.lname="";
            $scope.nuname="";
            $scope.nuemail="";
            $scope.nuphno="";
            $scope.upcontacts=[];
            $scope.send=function(){
               //alert($scope.g_name);
               send_group_details.send_details($scope);
               //console.log($scope.collect);
            };
            $scope.onpageload=function(){
              //alert("i am loaded");
              collect_group_info.get_group_info($scope);
            };
            $scope.getcontact=function(group_id){
              $scope.grp_id=group_id;
              //alert($scope.grp_id);
                group_contacts_info.get_members_info($scope,$scope.grp_id);
                //console.log($scope.collect);
            };
            $scope.getAllContacts=function(){
              $scope.hideTable=false;
              allContacts_info.getContacts_info($scope);
            };
            $scope.add_new_contact=function(uname,emailid,phno){
              alert($scope.hideme);
              $scope.nuname=uname;
              $scope.nuemail=emailid;
              $scope.nuphno=phno;
              alert($scope.nuemail);console.log(emailid);
              alert($scope.nuname);
              addNewGroupContact.send_con($scope,$scope.nuname,$scope.nuemail,$scope.nuphno);
            };
            $scope.add_to_group=function(){
              allContacts_info.getContacts_info($scope);
            };
            $scope.add_excontacts=function(collect_members){
              //alert(JSON.stringify($scope.books));

              addGroupContact.send_contacts($scope);
            };
            $scope.edit_contact=function(gid){
              $scope.grp_id=gid;
              group_contacts_info.get_members_info($scope,$scope.grp_id);
            };
            $scope.update_contact=function(uname,uemail,uphone)
            {
            $scope.uname=uname;
            $scope.uemail=uemail;
            $scope.uphno=uphone;

              update_grpcontact.update($scope,$scope.uname,$scope.uemail,$scope.uphno);

            };
            $scope.delete_data=function(email)
            {
              $scope.uemail=email;
              alert($scope.uemail);
              del_contact.deletes($scope,$scope.uemail);
            }
            $scope.showEditModal=function(name,email,phno){
            $scope.uname=name;
            $scope.uemail=email;
            $scope.uphno=phno;
            $("#econtact").modal('hide');
            $("#EditUserContacts").modal('show');
              
            };
            /*$scope.hide_fun=function(){
              $scope.hideme=true;
            };*/
       });
