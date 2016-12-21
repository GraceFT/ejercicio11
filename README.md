# Ejercicio11: posNeg

Inicio: Evaluar numeros con valor negativo.

##Ingreso de Datos
- a
- b
- negative
- evaluar

##Proceso
- Pedir a
- Pedir b
- Evaluar negative
- Evaluar a y b y guardar en evaluar.
    - Si (a < 0 y b > 0 !negative o a > 0 && b < 0 !negative)
        - retorna 1//si uno es negativo y otro positivo y negative es false.
        
        - Si no 
            - Si (a < 0 y b < 0 && negative)
                - retorna 1//si los dos son negativos y negative es true.
            - Si no 
                - retorna 0
            
    Fin si

*Fin*