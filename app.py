from flask import Flask

from position_rotation import get_position, get_rotation

app = Flask(__name__)


class PositionRotation(Resource):
    def get(self):
        return {'position': get_position(), 'rotation': get_rotation()}


if __name__ == '__main__':
    app.run(debug=True)
