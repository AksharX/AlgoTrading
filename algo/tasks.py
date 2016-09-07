from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger

from algo.utils import simple_moving

logger = get_task_logger(__name__)


@periodic_task(
    run_every=(crontab(minute='*/15')),
    name="task_run_simple",
    ignore_result=True
)
def SimpleMovingAlgo():
    """
    Runs the Simple Moving Algo
    """
    simple_moving()
    logger.info("Running the Simple Moving Average Algo")