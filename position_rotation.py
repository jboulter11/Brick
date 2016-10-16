import serial


def verlet(r, v, dt, a):
    r_new = r + v * dt + a(r) * dt ** 2 / 2
    v_new = v + (a(r) + a(r_new)) / 2 * dt
    return (r_new, v_new)


def get_position():
    pass


def get_rotation():
    pass
