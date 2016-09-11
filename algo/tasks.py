from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger

import algo.utils import runAlgo

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
    runAlgo()
    logger.info("Running the Simple Moving Average Algo")