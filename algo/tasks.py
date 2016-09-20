from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger

from algo.utils import run_simulation


logger = get_task_logger(__name__)


@periodic_task(run_every=(crontab(minute='*/1')), name="Sma_Algo", ignore_result=True)
def Sma_Algo():
#   
    run_simulation()
    
    logger.info("Finished Running Simulation")


#####################################################
#
#	Worker $ celery -A AlgoTrading worker -l info
#
#	Beat $ celery -A AlgoTrading beat -l info
#
#####################################################