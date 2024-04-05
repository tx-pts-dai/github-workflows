FROM alpine

WORKDIR /app

# Must be stored as an environment variable (e.g. SECRET_TOKEN)
# Passed via 'docker build --secret id=SECRET_TOKEN [...]'
RUN --mount=type=secret,id=SECRET_TOKEN \
    cp /run/secrets/SECRET_TOKEN hello.txt

RUN cat hello.txt

RUN --mount=type=secret,id=SECRET_TOKEN \
    cat /run/secrets/SECRET_TOKEN

CMD ["cat", "hello.txt"]
