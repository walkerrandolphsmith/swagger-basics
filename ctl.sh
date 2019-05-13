command=$1

case $command in
    build)
      docker-compose build $2
      ;;
    up)
      docker-compose up $2
      ;;
    *)
      echo "command not found"
      exit 1
      ;;
esac