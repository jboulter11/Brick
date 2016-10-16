# import serial
import random

from flask import Flask, Response, render_template

import gevent
import gevent.monkey
from gevent.pywsgi import WSGIServer
gevent.monkey.patch_all()

app = Flask(__name__)


def verlet(r, v, dt, a):
    r_new = r + v * dt + a(r) * dt ** 2 / 2
    v_new = v + (a(r) + a(r_new)) / 2 * dt
    return (r_new, v_new)


def event_stream():
    while True:
        gevent.sleep(float(1) / 30)
        # ser = serial.Serial('/dev/ttyACM0', 9600)
        # data = eval(ser.readline())
        str = "{(random.randint(0,100), random.randint(0,100), random.randint(0,100))"+"}"
        yield 'data: %s\n\n' % (random.randint(0,100), random.randint(0,100), random.randint(0,100))


@app.route('/stream')
def sse_request():
    return Response(event_stream(), mimetype='text/event-stream')


@app.route('/')
def page():
    return render_template('index.html')


if __name__ == '__main__':
    http_server = WSGIServer(('127.0.0.1', 8001), app)
    http_server.serve_forever()
