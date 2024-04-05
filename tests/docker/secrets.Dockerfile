FROM alpine

WORKDIR /app

RUN --mount=type=secret,id=SECRET_TOKEN \
    cp /run/secrets/SECRET_TOKEN hello.txt

CMD ["cat", "hello.txt"]
