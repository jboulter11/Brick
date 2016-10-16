from flask import Flask, Response, render_template

import gevent
import gevent.monkey
from gevent.pywsgi import WSGIServer
gevent.monkey.patch_all()

app = Flask(__name__)


def event_stream():
    while True:
        gevent.sleep(1)
        yield 'data: %s\n\n' % 0


@app.route('/stream')
def sse_request():
    return Response(event_stream(), mimetype='text/event-stream')


@app.route('/')
def page():
    return render_template('sse.html')


if __name__ == '__main__':
    http_server = WSGIServer(('127.0.0.1', 8001), app)
    http_server.serve_forever()
