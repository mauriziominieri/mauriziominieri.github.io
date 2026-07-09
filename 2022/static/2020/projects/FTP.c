#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int Menu()
{
    int scelta;

     printf("\t\t\t\t\tINFORMATICANDO - FinalTeachingProject\n\t\t\t\t\t\t   Maurizio Minieri");

    printf("\n\nx-----------------------------------------------------------------x");
             printf("\n| 0) EXIT\t\t\t\t\t\t\t  |\n| 1) Per svolgere un'equazione di primo grado\t\t\t  |\n| 2) Per svolgere un'equazione di secondo grado\t\t\t  |\n|\t\t\t--------------------\t\t\t  |\n| 3) Per il TRIANGOLO\t\t\t\t\t\t  |\n|"
                    " 4) Per il QUADRATO\t\t\t\t\t\t  |\n| 5) Per il RETTANGOLO\t\t\t\t\t\t  |\n| 6) Per il CERCHIO");
             printf("\t\t\t\t\t\t  |\n");
           printf("x-----------------------------------------------------------------x");
            printf("\n  SCELTA = ");
            while (scanf("%d",&scelta) != 1)
            {
                 printf("Devi inserire un numero : ");
                 while (getchar() != '\n');
            }

    return scelta;
}


void Pulisci()
{
   printf("\n\nPremi Enter per continuare... ");
     char prev=0;

        while(1)
        {
            char c = getchar();

            if(c == '\n' && prev == c)
            {
                system("@cls||clear");
                break;
            }

            prev = c;
        }
}

int main()
{
     float a,b,c;               //equazioni
     int scelta,scelta2;          //scelte
     float base,altezza,area,lato,raggio,diametro,circonferenza,diagonale;   //triangolo,quadrato
     const float pi_greco=3.14159265358979323846;


    do{
             scelta=Menu();
             switch(scelta)
             {
                 case 0:
                     printf("\nArrivederci\n");
                 break;

                 case 1:
                         printf("\n\n");
                          printf("\t\tEquazione primo grado (ax+b=0)\n\n\n");


                            printf("Scrivi quanto vale a: ");
                            while (scanf("%f",&a)!=1)
                            {
                              printf("Devi inserire un numero reale: ");
                              while (getchar() != '\n');
                            }
                            printf("scrivi quanto vale b: ");
                            while (scanf("%f",&b)!=1)
                            {
                              printf("Devi inserire un numero reale: ");
                              while (getchar() != '\n');
                            }

                            float x=0;

                            if (a == 0)
                                printf("\n\nUn numero diviso 0:impossibile,non ammette soluzioni\n\n\n\n\n");
                            else{
                                 x=-b/a;
                                 printf("\n\nSOLUZIONE:  x = %f\n\n\n",x);
                            }

                       Pulisci();
                 break;

                 case 2:
                          printf("\n\n");
                          printf("\t\tEquazione secondo grado (ax^2+bx+c)\n\n\n");

                          printf("Scrivi il coefficiente della x^2: ");
                          while (scanf("%f",&a)!=1)
                          {
                              printf("Devi inserire un numero reale: ");
                              while (getchar() != '\n');
                          }
                          printf("Scrivi il coefficiente della x: ");
                          while (scanf("%f",&b)!=1)
                          {
                              printf("Devi inserire un numero reale: ");
                              while (getchar() != '\n');
                          }
                          printf("Scrivi il termine noto: ");
                          while (scanf("%f",&c)!=1)
                          {
                              printf("Devi inserire un numero reale: ");
                              while (getchar() != '\n');
                          }

                          float delta=0;
                          delta=(b*b)-4*(a*c);

                          printf("\n\n\nIl delta e' %f",delta);

                              float x1=0,x2=0;
                              if (delta==0){
                                    x1=-b/(2*a);
                              }
                              else{
                                    x1=(-b+sqrt(delta))/(2*a);
                                    x2=(-b-sqrt(delta))/(2*a);
                              }

                          if(a==0)
                               printf("\nImpossibile,la x tende all'infinito\n\n");

                          else if(delta>0)
                          {
                                    printf("\n\nL'equazione ha due soluzioni reali e distinte:\n");
                                    printf("x1=%f\nx2=%f",x1,x2);
                          }

                          else if(delta == 0)
                          {
                             printf("\n\nLe soluzioni dell'equazione sono coincidenti:\n");
                             printf("x1=x2=%f",x1);
                          }

                          else
                             printf("\n\nL'equazione non ha soluzioni");


                   Pulisci();
                 break;

                  case 3:
                        printf("\n\nScrivi 1 se conosci la base e l'altezza.\nScrivi 2 se conosci la base e l'area.\nScrivi 3 se conosci l'altezza e l'area.\n");
                         printf("  SCELTA = ");
                            while (scanf("%d",&scelta2)!=1||scelta2<1||scelta2>3)
                            {
                                      printf("Devi inserire 1, 2 oppure 3: ");
                                      while (getchar() != '\n');
                            }

                      if(scelta2==1){

                        printf("\nScrivi quanto vale la base: ");
                        while (scanf("%f",&base)!=1||base<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }
                        printf("Scrivi quanto vale l'altezza: ");
                        while (scanf("%f",&altezza)!=1||altezza<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nL'area del triangolo e': %f",(base*altezza)/2);
                      }
                      else if(scelta2==2){

                        printf("\nScrivi quanto vale la base: ");
                        while (scanf("%f",&base)!=1||base<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }
                        printf("Scrivi quanto vale l'area: ");
                        while (scanf("%f",&area)!=1||area<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nL'altezza del triangolo e': %f",(area*2)/base);
                      }
                      else{

                        printf("\nScrivi quanto vale l'altezza: ");
                        while (scanf("%f",&altezza)!=1||altezza<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }
                        printf("Scrivi quanto vale l'area: ");
                        while (scanf("%f",&area)!=1||area<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }


                         printf("\nLa base del triangolo e': %f",(area*2)/altezza);
                      }

                           Pulisci();


                 break;

                  case 4:
                      printf("\n\nScrivi 1 se conosci l'area.\nScrivi 2 se conosci il lato.\n");
                         printf("  SCELTA = ");
                            while (scanf("%d",&scelta2)!=1||scelta2<1||scelta2>2)
                            {
                                      printf("Devi inserire 1 oppure 2: ");
                                      while (getchar() != '\n');
                            }

                      if(scelta2==1){

                        printf("\nScrivi quanto vale l'area: ");
                        while (scanf("%f",&area)!=1||area<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nIl lato del quadrato e': %f",sqrt(area));
                      }
                      else{

                        printf("\nScrivi quanto vale il lato: ");
                        while (scanf("%f",&lato)!=1||lato<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nL'area del quadrato e': %f",lato*lato);

                      }

                           Pulisci();

                 break;

                 case 5 :

                      printf("\n\nScrivi 1 se conosci la BASE e l'ALTEZZA.\nScrivi 2 se conosci BASE e AREA.\nScrivi 3 se conosci BASE e DIAGONALE.\nScrivi 4 se conosci AREA e ALTEZZA.\nScrivi 5 se conosci DIAGONALE e ALTEZZA.\n");
                         printf("  SCELTA = ");
                            while (scanf("%d",&scelta2)!=1||scelta2<1||scelta2>5)
                            {
                                      printf("Devi inserire 1, 2, 3, 4, oppure 5: ");
                                      while (getchar() != '\n');
                            }

                        if(scelta2==1){

                                printf("\nScrivi quanto vale la base: ");
                                while (scanf("%f",&base)!=1||base<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("Scrivi quanto vale l'altezza: ");
                                while (scanf("%f",&altezza)!=1||altezza<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("\nL'area del rettangolo e': %f, la diagonale e': %f",base*altezza,sqrt(base*base+altezza*altezza));
                         }
                         else if(scelta2==2){
                             printf("\nScrivi quanto vale la base: ");
                                while (scanf("%f",&base)!=1||base<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("Scrivi quanto vale l'area: ");
                                while (scanf("%f",&area)!=1||area<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("\nL'altezza del rettangolo e': %f, la diagonale e': %f",area/base,sqrt(base*base+area/base*area/base));
                         }
                         else if(scelta2==3){
                             printf("\nScrivi quanto vale la base: ");
                                while (scanf("%f",&base)!=1||base<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("Scrivi quanto vale la diagonale: ");
                                while (scanf("%f",&diagonale)!=1||diagonale<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }
                                 if(diagonale*diagonale-base*base<=0 ||base*diagonale*diagonale-base*base<=0)
                                     printf("\nValori non validi");
                                 else
                                    printf("\nL'altezza del rettangolo e': %f, l'area e': %f",sqrt(diagonale*diagonale-base*base),base*sqrt(diagonale*diagonale-base*base));
                         }
                          else if(scelta2==4){
                             printf("\nScrivi quanto vale l'area: ");
                                while (scanf("%f",&area)!=1||area<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("Scrivi quanto vale l'altezza: ");
                                while (scanf("%f",&altezza)!=1||altezza<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }
                                if(area/altezza*area/altezza+altezza*altezza<=0)
                                     printf("\nValori non validi");
                                 else
                                     printf("\nLa base del rettangolo e': %f, la diagonale e': %f",area/altezza,sqrt(area/altezza*area/altezza+altezza*altezza));
                         }
                         else{
                                printf("\nScrivi quanto vale la diagonale: ");
                                while (scanf("%f",&diagonale)!=1||diagonale<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }

                                 printf("Scrivi quanto vale l'altezza: ");
                                while (scanf("%f",&altezza)!=1||altezza<0.1)
                                {
                                  printf("Devi inserire un numero reale positivo: ");
                                  while (getchar() != '\n');
                                }
                                 if(diagonale*diagonale-altezza*altezza <=0 || diagonale*diagonale-altezza*altezza*altezza <=0)
                                    printf("\nValori non validi");
                                 else
                                    printf("\nLa base del rettangolo e': %f, l'area e': %f",sqrt(diagonale*diagonale-altezza*altezza),sqrt(diagonale*diagonale-altezza*altezza)*altezza);
                         }

                      Pulisci();
                 break;

                 case 6 :

                         printf("\n\nScrivi 1 se conosci il raggio.\nScrivi 2 se conosci il diametro.\nScrivi 3 se conosci la circonferenza.\nScrivi 4 se conosci l'area.\n");
                         printf("  SCELTA = ");
                            while (scanf("%d",&scelta2)!=1||scelta2<1||scelta2>4)
                            {
                                      printf("Devi inserire 1, 2, 3 oppure 4: ");
                                      while (getchar() != '\n');
                            }

                      if(scelta2==1){

                        printf("\nScrivi quanto vale il raggio: ");
                        while (scanf("%f",&raggio)!=1||raggio<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nIl diametro e': %f, la circonferenza e': %f, l'area e': %f",2*raggio,2*pi_greco*raggio,pi_greco*(raggio*raggio));
                      }
                       else if(scelta2==2){

                        printf("\nScrivi quanto vale il diametro: ");
                        while (scanf("%f",&diametro)!=1||diametro<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nIl raggio e': %f, la circonferenza e': %f, l'area e': %f", diametro/2,2*pi_greco*(diametro/2),pi_greco*(diametro/2)*(diametro/2));
                      }
                      else if(scelta2==3){

                        printf("\nScrivi quanto vale la circonferenza: ");
                        while (scanf("%f",&circonferenza)!=1||circonferenza<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }

                         printf("\nIl raggio e': %f, il diametro e': %f, l'area e': %f",circonferenza/(2*pi_greco),2*circonferenza/(2*pi_greco),pi_greco*circonferenza/(2*pi_greco)*circonferenza/(2*pi_greco));
                      }
                      else if(scelta2==4){

                        printf("\nScrivi quanto vale l'area: ");
                        while (scanf("%f",&area)!=1||area<0.1)
                        {
                          printf("Devi inserire un numero reale positivo: ");
                          while (getchar() != '\n');
                        }


                         printf("\nIl raggio e': %f, la circonferenza e': %f, il diametro e': %f",sqrt(area/pi_greco),2*pi_greco*sqrt(area/pi_greco),2*sqrt(area/pi_greco));
                      }


                    Pulisci();
                    break;


                  default:

                    printf("\nErrore, numero non valido");
                         Pulisci();
             }
     }
     while(scelta!=0);



    printf("\n\n\n");
    system("PAUSE");
    return 0;
}