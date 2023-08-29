Requirements
set up the infrastructure of  new product.
The product is a web based app, its components will be python backend micro services and js
frontend micro services.
It will use mongodb database and s3 buckets (holding static html)
Please setup the infrastructure and services (eks vpc K8S etc) serving this product.
Take under consideration that all services need to be available from within the vpc but not from
the outside.
Access from the public will be available only to specific services(such as web service).
The access to specific target will be based on the target url host
So if the customer target service host url will be customer.sandbox.curve.tech
You will add x-host into the http header of the request.
The cluster itself will hold two node groups
One for the micro services your team develop
The second for internal services (such as databases)
setup monitoring-prometheus & grafana
