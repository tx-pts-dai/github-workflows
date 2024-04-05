FROM alpine

WORKDIR /app

# Must be stored as an environment variable named SECRET_TOKEN and passed via 'docker build --secret id=SECRET_TOKEN [...]'
RUN --mount=type=secret,id=SECRET_TOKEN \
    cp /run/secrets/SECRET_TOKEN hello.txt

CMD ["cat", "hello.txt"]
