package com.label4002.blog.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class ScheduledPublishService {

    private static final Logger log = LoggerFactory.getLogger(ScheduledPublishService.class);

    private final PostService postService;

    public ScheduledPublishService(PostService postService) {
        this.postService = postService;
    }

    @Scheduled(fixedRate = 60000)
    public void checkAndPublishScheduledPosts() {
        try {
            postService.publishScheduledPosts();
        } catch (Exception e) {
            log.error("预约上线任务执行失败", e);
        }
    }

    @EventListener(ApplicationReadyEvent.class)
    public void recoverOnStartup() {
        try {
            postService.publishScheduledPosts();
            log.info("启动时恢复预约上线任务完成");
        } catch (Exception e) {
            log.error("启动时恢复预约上线任务失败", e);
        }
    }
}
