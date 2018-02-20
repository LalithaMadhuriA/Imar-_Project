var app=angular.module("myapp",[]);
       app.service("send_group_details",function($http){
            this.send_details=function(v){
                
                var request = $http({ 
                     mehtod: "post", 
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
  
                         alert("Group created successfully");
                         v.onpageload();
                     } 
                 ); 


            }
       });
       app.service("collect_group_info",function($http){
             this.get_group_info=function(v){

                  $http.get("send_group_info.php")
                    .then(function(response) {
                        v.collect = response.data;
                        //alert(JSON.stringify(v.collect));
                    });
             }
       });
       app.service("group_contacts_info",function($http){
        this.get_members_info=function(v){
                  $http.get("collect_grpmembers_info.php")
                    .then(function(response) {
                        v.group_members = response.data;
                        for(i=0;i<v.group_members.length;i++){
                          v.contacts.push({email:''});
                        }

                        //alert(JSON.stringify(v.group_members));

                    });
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
                          
                $http.post('add_econtacts.php',{us:v.test_message}).success(
              function(data){
                   alert("Contact added");
                   v.onpageload();
            })


            }
       });
       app.service("update_grpcontact",function($http)
        {
          this.update=function(v){
                          
                $http.post('update_contacts.php',{us:v.test_message}).success(
              function(data){
                   alert("Contact updated successfully");
            })
            }
        });
       app.service("get_edit_contact",function($http){
        this.get_data=function(v){

        }
       });


       app.controller("app_con",function($scope,send_group_details,collect_group_info,group_contacts_info,update_grpcontact,allContacts_info,addGroupContact){
            $scope.g_name="";
            $scope.g_id="";
            $scope.collect="";
            $scope.hideme=false;
            $scope.hideTable=true;
            $scope.collect_members="";
            $scope.group_members="";
            $scope.add_contacts="";
            $scope.books=[];
            $scope.contacts=[];
            $scope.uname="";
            $scope.uemai="";
            $scope.uphno="";
            $scope.send=function(){
               //alert("hai");
               send_group_details.send_details($scope);
               console.log($scope.collect);
            };
            $scope.onpageload=function(){
              //alert("i am loaded");
              collect_group_info.get_group_info($scope);
            };
            $scope.getcontact=function(group_id){
                group_contacts_info.get_members_info($scope);
                //console.log($scope.collect);
            };
            $scope.getAllContacts=function(){
              $scope.hideTable=false;
              allContacts_info.getContacts_info($scope);
            };
            $scope.add_new_contact=function(group_id){
              //console.log(group_id);
              addGroupContact.send_contacts($scope);
            };
            $scope.add_to_group=function(){
              allContacts_info.getContacts_info($scope);
            };
            $scope.add_excontacts=function(collect_members){
              //alert(JSON.stringify($scope.books));

              addGroupContact.send_contacts($scope);
            };
            $scope.edit_contact=function(){
              group_contacts_info.get_members_info($scope);
            };
            $scope.update_contact=function()
            {
              update_grpcontact.update($scope);
            };
            $scope.showEditModal=function(uname,uemail,uphno){
                $scope.uname=uname;
            $scope.uemai=uemail;
            $scope.uphno=uphno;alert("hii");
            $("#EditUserContact").modal(show);
              
            };
            /*$scope.hide_fun=function(){
              $scope.hideme=true;
            };*/
       });
