package com.label4002.blog.repository;

import com.label4002.blog.entity.ReadHistoryEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReadHistoryRepository extends JpaRepository<ReadHistoryEntity, Long> {

    Page<ReadHistoryEntity> findByUserIdOrderByReadAtDesc(Long userId, Pageable pageable);

    long countByUserId(Long userId);

    boolean existsByUserIdAndPostId(Long userId, Long postId);

    void deleteByUserIdAndPostId(Long userId, Long postId);
}
