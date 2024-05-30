<script setup>
</script>
<template>
    <main class="bg-color-primary">
        <section class="page-top">
            <header class="masthead2">
                <div class="container px-4 px-lg-5 h-50">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white font-weight-bold">Ingeniería Económica Computo III </h1>
                            <hr class="divider" />
                            <p class="text-white mb-4 text-uppercase text-ls-3">Unidad IV: Amortización y Préstamos</p>
                        </div>
                    </div>
                </div>
            </header>
        </section>
        <section class="page-section">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-warning display-5 fw-semibold mb-3">Semana # 14 </h2>
                        <hr class="divider" />
                        <p class="display-6 fw-medium ">Amortización y préstamos</p>
                        <p class="lead">Según (UNAM, 2006) “amortización es el método por el cual se va liquidando una
                            deuda en pagos parciales”. El importe de cada pago sirve para solventar los intereses.
                            Por tanto, según (Rodríguez Franco, 2015) “la amortización es una de las aplicaciones
                            más importantes de las anualidades. Las deudas se amortizan con pagos periódicos
                            iguales”.</p>
                    </div>
                </div>
            </div>
            <div class="container px-4 px-lg-5 pt-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <h2 class="border-top pb-5"></h2>
                    <div class="col-lg-8 text-center">
                        <p class="lead">Por tanto, es menester considerar las fórmulas de las anualidades vencidas,
                            vistas en la
                            unidad anterior. Las cuales son el insumo básico para diseñar las tablas de
                            amortización
                        </p>

                        <img src="../../../public/img/SeccionSemanaXIV/formula_amortizacion.png"
                            class="card-img-top py-5">
                    </div>
                </div>
            </div>
            <div class="container px-4 px-lg-5 pt-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <h2 class="border-top pb-5"></h2>
                    <div class="col-lg-8 text-center">
                        <p class="display-6 fw-medium ">Tablas de amortización</p>
                        <p class="lead">Las amortizaciones se representan comúnmente en tablas que se conforman de la
                            siguiente manera
                        </p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="container pt-4">
                            <div class="row justify-content-center">
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead class="lead">
                                                        <tr>
                                                            <th scope="col">Columna</th>
                                                            <th scope="col">Definición</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="lead">
                                                        <tr>
                                                            <th scope="row">Columna 1</th>
                                                            <td>Representa los periodos (n)</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Columna 2</th>
                                                            <td> Se coloca el valor de los pagos (R) <br> que se calcula
                                                                de
                                                                la fórmula de
                                                                anualidades.</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Columna 3</th>
                                                            <td>Se calculan los intereses (I) y este resultado se
                                                                obtiene de multiplicar <br>
                                                                el saldo insoluto anterior por la tasa de interés.</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Columna 4</th>
                                                            <td>Se muestra el valor de la amortización del periodo (A) y
                                                                se obtiene <br>
                                                                de restar “Al pago del periodo el valor de los
                                                                intereses”</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Columna 5</th>
                                                            <td>Saldo insoluto (S) esta columna <br> representa el saldo
                                                                insoluto de la
                                                                deuda que se obtiene de restar <br> el saldo insoluto
                                                                anterior y el valor de la
                                                                amortización.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 px-lg-5 pt-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <p class="lead">Lo anterior se muestra en la siguiente figura
                        </p>

                        <img src="../../../public/img/SeccionSemanaXIV/tabla_amortizacion.png"
                            class="card-img-top py-5">
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container px-4 px-lg-5">
                <h2 class="border-top py-3"></h2>
                <div class="container px-4 px-lg-5 pb-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 text-center">
                            <p class="display-6 fw-medium">Ejemplos de amortización</p>
                            <p class="lead">1. Un préstamo de $ 2,000 se va a amortizar por medio de 8 pagos mensuales
                                iguales.
                                Determine el valor del pago mensual si la tasa de interés es del 34% capitalizable
                                mensualmente.</p>
                            <p class="fw-semibold fs-4 mb-3">Paso 1.</p>
                            <p class="lead fw-semibold">DATOS</p>
                            <p class="lead">Para resolver este planteamiento es necesario identificar que se trata de
                                una
                                anualidad vencida y posteriormente calcular el valor de R.
                            </p>
                            <p class="lead">C= $2,000</p>
                            <p class="lead">n=8 mensualidades</p>
                            <p class="lead">i=0.34/12 = 0.0283</p>
                            <p class="fw-semibold fs-4 mb-3">Paso 2.</p>
                            <p class="lead fw-semibold">Solución</p>
                            <img src="../../../public/img/SeccionSemanaXIV/paso_2_ejercicio_1.png"
                                class="card-img-top py-5">

                            <p class="lead">R=$282.91 con este valor se construye la tabla de amortización; debido a la
                                cantidad
                                de procesos, se explicarán los más básicos y posteriormente se compartirá en Excel.
                            </p>
                            <img src="../../../public/img/SeccionSemanaXIV/tabla_ejemplo_1.png"
                                class="card-img-top py-4">
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="container pt-4">
                                <div class="row justify-content-center">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <div class="table-responsive">
                                                    <table class="table table-hover">
                                                        <thead class="lead">
                                                            <tr>
                                                                <th scope="col">Columna</th>
                                                                <th scope="col">Definición</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="lead">
                                                            <tr>
                                                                <th scope="row">Columna 1</th>
                                                                <td>La columna de pagos es $282.91 y <br> es constante
                                                                    en las
                                                                    8 mensualidades.
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Columna 3</th>
                                                                <td> La columna de interés se calcula
                                                                    I=2,000*0.0283=$56.60, los siguientes <br> valores
                                                                    se
                                                                    calculan con el valor de <br> la tasa de interés y
                                                                    el
                                                                    saldo actual por periodo.</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Columna 4</th>
                                                                <td>La columna de amortización es A=$282.91 -
                                                                    $56.60=$226.31 el mismo <br> proceso se
                                                                    repite para todos los periodos
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Columna 5</th>
                                                                <td>La columna del nuevo saldo es: $2,000 - $226.31=
                                                                    $1773.69</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container px-4 px-lg-5 py-5">
                <h2 class="border-top py-5"></h2>
                <div class="container px-4 px-lg-5 ">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 text-center">
                            <p class="display-6 fw-medium">Trabajo en clases</p>
                            <p class="fw-semibold fs-4 mb-3">Semana 14 - (5%) Diseñando tablas de amortización</p>
                            <p class="lead">1. Una deuda con banco Hipotecario de $7,250 se debe pagar en un año mediante
                                pagos trimestrales iguales vencidos. Si el interés pactado es de 36% anual convertible
                                trimestralmente</p>
                            <p class="lead">a. Determine el importe de cada pago.</p>
                            <p class="lead">b. Construya una tabla de amortización.</p>
                            <p class="lead fw-semibold mb-3">Datos</p>
                            <p class="lead">C = $7,250</p>
                            <p class="lead">i = 0.09</p>
                            <p class="lead">n = 4</p>
                            <img src="../../../public/img/SeccionSemanaXIV/ejercicio_1.png"
                                class="card-img-top py-4">
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-warning fw-semibold">
                            <a href="https://onedrive.live.com/edit?id=B36370B8BB92EC71!sac6cca22eb154a5bb7b6d37daa84ea69&resid=B36370B8BB92EC71!sac6cca22eb154a5bb7b6d37daa84ea69&cid=b36370b8bb92ec71&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy9iMzYzNzBiOGJiOTJlYzcxL0VTTEtiS3dWNjF0S3Q3YlRmYXFFNm1rQm5KMUxHREdDSV9nQWZfXzhWQ0hNekE_ZT01ZURGenY&migratedtospo=true&wdo=2"
                                class="text-black" target="_blank" style="text-decoration: none;">Ver tareas completa
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </section>


    </main>
</template>
<style scoped></style>
