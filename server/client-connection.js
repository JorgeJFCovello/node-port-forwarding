
const { Client } = require('ssh2');
const logger = require('../log/log.config');

class Connection {
  constructor(){
    this.conn = new Client();
  }
  initialize(){
    try {
      this.conn.on('ready', () => {
        createConection()
      }).connect(
        !process.env.PATH_TO_PRIVATE_KEY ? {
        host: process.env.SSH_IP,
        port: process.env.SSH_PORT,
        username: process.env.USERNAME,
        password: process.env.USERPASSWORD
      } : {
        host: process.env.SSH_IP,
        port: process.env.SSH_PORT,
        username: process.env.USERNAME,
        privateKey: readFileSync(process.env.PATH_TO_PRIVATE_KEY)
      }
      );
    } catch (err) {
      logger.log({
        level: 'error',
        message: err
      });
    }
  }
  createConection(){
    try{
      this.conn.forwardOut(process.env.REMOTE_IP, process.env.REMOTE_PORT, process.env.LOCAL_IP, process.env.LOCAL_PORT, (err, stream) => {
          if (err){
            logger.log({
              level: 'error',
              message: err
            });
            throw err;
          }
          stream.on('close', () => {
            try{
              console.log('TCP :: CLOSED');
              this.conn.end();
            } catch (err) {
              logger.log({
                level: 'error',
                message: err
              });
            }
          }).on('data', (data) => {
            logger.log({
              level: 'info',
              message: data
            });
          }).end([
            'HEAD / HTTP/1.1',
            'User-Agent: curl/7.27.0',
            'Host: 127.0.0.1',
            'Accept: */*',
            'Connection: close',
            '',
            ''
          ].join('\r\n'));
        });
    } catch (err) {
      logger.log({
        level: 'error',
        message: err
      });
    }
  }
}

// example output:
// Client :: ready
// TCP :: DATA: HTTP/1.1 200 OK
// Date: Thu, 15 Nov 2012 13:52:58 GMT
// Server: Apache/2.2.22 (Ubuntu)
// X-Powered-By: PHP/5.4.6-1ubuntu1
// Last-Modified: Thu, 01 Jan 1970 00:00:00 GMT
// Content-Encoding: gzip
// Vary: Accept-Encoding
// Connection: close
// Content-Type: text/html; charset=UTF-8
//
//
// TCP :: CLOSED

module.exports = Connection