<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Samanyab</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">

    <!-- Styles -->

</head>
<body>
<div id="app">
    @include('layout.header')

    @yield('content')

    @include('layout.footer')
</div>
</body>

<script src="/js/app.js"></script>
</html>
