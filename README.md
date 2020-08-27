# Online Solr password encryption tool for the Basic Authentication plugin

This online tool allows you to generate a solr password in the format required by the Basic Authentication plugin.
This way you can get rid of the default "SolrRocks" password stored in the security.json file under the SOLR home directory.

## Background

I made this tool to streamline the process of encoding the initial solr passwords for the Basic Authentication plugin.

When enabling Basic Authentication on solr, the initial passwords are stored in a security.json file under the SOLR home directory as a sha256(password+salt) hash.
User IDs and passwords can be changed later on by using the HTTP Api
The specific hashing algorithm can be found here and is a little cumbersome:
[Sha256AuthenticationProvider.java](https://github.com/apache/lucene-solr/blob/master/solr/core/src/java/org/apache/solr/security/Sha256AuthenticationProvider.java)

## Security

The entire process is executed client side, no information is sent to any remote server.

The process is protected agaist XSS attacs by using [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

The code is minimal and easy to inspect.

The salt is a random generated String of 16 alphanumeric characters that changes after each execution.

## Usage

[Use it online](https://clemente-biondo.github.io/)

## Authors

* **Clemente Biondo** - *Initial work* - [clemente-biondo](https://github.com/clemente-biondo/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
