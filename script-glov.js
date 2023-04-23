
                /*    panier d'achat Govo   */




                const arr = [document.querySelector(".article1"),document.querySelector(".article2"),document.querySelector(".article3"),document.querySelector(".article4"),document.querySelector(".article5")]


                /*     nombre totatal d'articles   */
       
       
                document.querySelector(".totale " ).innerHTML = arr.length+"Articles"
               
         
       let it = 0  ;let a=1 ;let b =1;let c=1 ; let d =1;let e =1;
       
                            
              
                       /*  prix unitaires des artiles    */
       
        var saC =document.querySelector(".article1").innerText =572.20
           
       var goB =document.querySelector(".article2").innerText = 162.50
                      
       var kraF =document.querySelector(".article3").innerText =168.75
                       
       var allU =document.querySelector(".article4").innerText =181.30
       
       var barQ =document.querySelector(".article5").innerText =43.75
       
             
       
                   /*    _ ajustement de la quantite de    kraft     
                          _ PRIX TOTAUX */
       
       
        let i =1,k =1,m =1,o =1,r =1  ;let j =i;let l =k;let n =m;let p=o ; let s=r ;
        
         
             
        document.querySelector(".numup-i" ).innerText = i+ "Paquet";
                                  document.querySelector(".numdown-j" ).innerText = j+ "Paquet";
                                  console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
                                  console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100);
                                  console.log(document.querySelector(".livraison").innerText = 25.00);
                                  console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00);
                                 
                                  
                                  function kraftup() {i++;      
                          document.querySelector(".numup-i " ).innerText = i+j-1 +"Paquet";
                          document.querySelector(".article3" ).innerText = (i+j-1)*kraF ;
                          console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
                          console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
                          console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
                      
                          function kraftdown() { j--;
                          document.querySelector(".numdown-j" ).innerText = i+j-1 +"Paquet";
                          document.querySelector(".article3" ).innerText = (i+j-1)*kraF ;
                          console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
                          console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
                          console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
                            
                         
                         
                          /* pour supprimer la valeur ajoutee de kraft  */
       
                          
        function serv(){it++ ;
         document.querySelector(".totale " ).innerHTML = arr.length-it+"Articles";
        document.querySelector(".section-3").remove();
        c++;
                     document.querySelector(".section-3-3").remove() ;
                     document.querySelector(".supprim-sTot").innerText = saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)  ;            
                     document.querySelector(".supprim-tva").innerText = (saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100;
                     document.querySelector(".supprim-tot").innerText =saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)+(saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100+25.00}
                         
                    
                    
                     /*    _ ajustement de la quantite d'allumium   */
                             /* _ PRIX TOTAUX */
       
          document.querySelector(".numup-k" ).innerText = k+ "Paquet";
                                   document.querySelector(".numdown-l" ).innerText = l+ "Paquet";
                                   console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU ) ;
                                   console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
                                   console.log(document.querySelector(".livraison").innerText = 25.00);
                                   console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)
                                  
                                   function allup() {k++;
                          document.querySelector(".numup-k " ).innerText = k+l-1 +"Paquet";
                          document.querySelector(".article4" ).innerText = (k+l-1)*allU ;
                          console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
                          console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
                          console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}  
                      
                      
                          function alldown() { l--;
                               document.querySelector(".numdown-l" ).innerText = k+l-1 +"Paquet";
                           document.querySelector(".article4" ).innerText = (k+l-1)*allU ;
                           console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
                           console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
                           console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)} 
                           
                           
                   /*  supprimer allu  */
       
                           function allu(){it++ ;
         document.querySelector(".totale " ).innerHTML = arr.length-it+"Articles";
        document.querySelector(".section-4").remove();
        d++;
                     document.querySelector(".section-4-4").remove() ;
                     document.querySelector(".supprim-sTot").innerText = saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e);               
                     document.querySelector(".supprim-tva").innerText = (saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100;
                     document.querySelector(".supprim-tot").innerText =saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)+(saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100+25.00}     
       
                   
                   
                     /*  _ ajustement de la quantite de barquettes kraft   
                          _ PRIX TOTAUX */
                   
        document.querySelector(".numup-m" ).innerText = m+ "Paquet";
          document.querySelector(".numdown-n" ).innerText = n+ "Paquet";
          console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
          console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
          console.log(document.querySelector(".livraison").innerText = 25.00);
          console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)
          
          function baup() {  m++;
         document.querySelector(".numup-m " ).innerText = m+n-1 +"Paquet";
       document.querySelector(".article5" ).innerText = (m+n-1)*barQ;
       console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU ) ;
       console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
       console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
       
       
       function badown() { n--;
             document.querySelector(".numdown-n" ).innerText = m+n-1 +"Paquet";
        document.querySelector(".article5" ).innerText = (m+n-1)*barQ ;
        console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );                
       console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
       console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
       
                /*supprimer   barquettes kraft  */
       
       function kraft(){it++ ;
         document.querySelector(".totale " ).innerHTML = arr.length-it+"Articles";
        document.querySelector(".section-5").remove();
                     document.querySelector(".section-5-5").remove() ;
                     e++;
                     document.querySelector(".supprim-sTot").innerText = (r+s-1)*saC*(2-a) +(o+p-1)*goB*(2-b)+(i+j-1)*kraF*(2-c)+(k+l-1)*allU*(2-d)+(m+n-1)*barQ*(2-e);               
                     document.querySelector(".supprim-tva").innerText = (saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100;
                     document.querySelector(".supprim-tot").innerText =saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)+(saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100+25.00}  
       
       
       
       
                  /* _ ajustement de la quantite de gobelet 
                       _ PRIX TOTAUX */
                   
         document.querySelector(".numup-o" ).innerText = o+ "Paquet";
          document.querySelector(".numdown-p" ).innerText = p+ "Paquet";
          console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
          console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
          console.log(document.querySelector(".livraison").innerText = 25.00);
          console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)
         
          function gobup() {o++;
         document.querySelector(".numup-o" ).innerText = o+p-1 +"Paquet";
         document.querySelector(".article2" ).innerText = (o+p-1)*goB;
         console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
         console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
         console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
       
         function gobdown() { p--;
              document.querySelector(".numdown-p" ).innerText = o+p-1 +"Paquet";
         document.querySelector(".article2" ).innerText = (o+p-1)*goB;
         console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
         console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );console.log(document.querySelector(".livraison").innerText = 25.00);
         console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
       
         
        /*  supprimer gobelet */
        
         function gobel(){it++ ;
         document.querySelector(".totale " ).innerHTML = arr.length-it+"Articles";
        document.querySelector(".section-2").remove();
                     document.querySelector(".section-2-2").remove() ;              
                     b++ ;
                     document.querySelector(".supprim-sTot").innerText = (r+s-1)*saC*(2-a) +(o+p-1)*goB*(2-b)+(i+j-1)*kraF*(2-c)+(k+l-1)*allU*(2-d)+(m+n-1)*barQ*(2-e) ;  
                     document.querySelector(".supprim-tva").innerText = (saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100;
                     document.querySelector(".supprim-tot").innerText =saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)+(saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100+25.00}
         
         
                     /*           _ ajustement de la quantite de sac   
                       _prix totaux  */
                   
        document.querySelector(".numup-r" ).innerText = r+ "Paquet";
         document.querySelector(".numdown-s" ).innerText = s+ "Paquet";
         console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
         console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
         console.log(document.querySelector(".livraison").innerText = 25.00);
         console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)
        
         function sacup() {r++;   
        document.querySelector(".numup-r" ).innerText = r+s-1 +"Paquet";
        document.querySelector(".article1" ).innerText = (r+s-1)*saC;
        console.log(document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
        console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
        console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
       
       
        function sacdown() { s--;
       document.querySelector(".numdown-s" ).innerText = r+s-1 +"Paquet";
        document.querySelector(".article1" ).innerText = (r+s-1)*saC;
       
       
          console.log ( document.querySelector(".sTotal").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU );
        console.log(document.querySelector(".tva").innerText =( (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU)*20/100 );
        console.log(document.querySelector(".total").innerText = (i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU +((i+j-1)*kraF +(r+s-1)*saC+(o+p-1)*goB+(m+n-1)*barQ +(k+l-1)*allU )*20/100 + 25.00)}
                      
        
        /*            supprimer  sac  */
        
        function sac(){it++;
        document.querySelector(".section-a").remove();
                     document.querySelector(".section-a-1").remove() ; 
                     document.querySelector(".totale " ).innerHTML = arr.length-it+"Articles";            
                        a++ ;
                       console.log( document.querySelector(".supprim-sTot").innerText = (r+s-1)*saC*(2-a) +(o+p-1)*goB*(2-b)+(i+j-1)*kraF*(2-c)+(k+l-1)*allU*(2-d)+(m+n-1)*barQ*(2-e));
                       document.querySelector(".supprim-tva").innerText = (saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100;
                       document.querySelector(".supprim-tot").innerText =saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e)+(saC*(2-a) +goB*(2-b)+kraF*(2-c)+allU*(2-d)+barQ*(2-e))*20/100+25.00}                                      
                      
                                  
                    /**     aimer les articles                          */
                   
                                                     
                                     function aimezUn() { document.querySelector(".colere-1").remove()}
                                         
                 
                                     function aimezDeux() { document.querySelector(".colere-2").remove()}
       
                                     function aimezTrois() { document.querySelector(".colere-3").remove()}
       
                                     function aimezQuatre() { document.querySelector(".colere-4").remove()}
                                     function aimezCinq(){ document.querySelector(".colere-5").remove()}