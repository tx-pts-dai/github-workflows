FROM alpine

WORKDIR /app

RUN --mount=type=bind,target=. \
    --mount=type=secret,id=SECRET_TOKEN

RUN echo "Hello, world! This is a secret $(cat /var/run/secrets/SECRET_TOKEN)" > hello.txt

CMD ["cat", "hello.txt"]
